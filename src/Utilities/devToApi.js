import { 
  blogsData as fallbackData
} from './blogsData';

const DEV_TO_API_BASE = 'https://dev.to/api';
const USERNAME = 'singhanuj620';

export const fetchDevToBlogs = async (username = USERNAME) => {
  try {
    const response = await fetch(`${DEV_TO_API_BASE}/articles?username=${username}&state=fresh`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
    }
    
    const blogs = await response.json();
    
    return blogs.sort((a, b) => new Date(b.published_at || b.created_at) - new Date(a.published_at || a.created_at));
  } catch (error) {
    console.error('Error fetching dev.to blogs, using fallback data:', error);
    
    return getFallbackBlogs();
  }
};

export const fetchDevToBlogById = async (blogId) => {
  try {
    const response = await fetch(`${DEV_TO_API_BASE}/articles/${blogId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blog: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching dev.to blog by ID:', error);
    
    const fallbackBlog = fallbackData.find(blog => blog.id === blogId);
    if (fallbackBlog) {
      return fallbackBlog;
    }
    
    throw error;
  }
};

const getFallbackBlogs = () => {
  return fallbackData;
};

export const getBlogStats = (blogs) => {
  if (!blogs || blogs.length === 0) {
    return {
      totalArticles: 0,
      totalReactions: 0,
      totalViews: 0,
      totalComments: 0
    };
  }

  return {
    totalArticles: blogs.length,
    totalReactions: blogs.reduce((total, blog) => total + (blog.public_reactions_count || 0), 0),
    totalViews: blogs.reduce((total, blog) => total + (blog.page_views_count || 0), 0),
    totalComments: blogs.reduce((total, blog) => total + (blog.comments_count || 0), 0)
  };
};

export const filterBlogsByTag = (blogs, tag) => {
  const blogsToFilter = blogs || fallbackData;
  if (!tag) return blogsToFilter;
  
  return blogsToFilter.filter(blog => 
    blog.tag_list && blog.tag_list.some(blogTag => 
      blogTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
};

export const searchBlogs = (blogs, query) => {
  const blogsToSearch = blogs || fallbackData;
  if (!query) return blogsToSearch;
  
  const lowercaseQuery = query.toLowerCase();
  return blogsToSearch.filter(blog => 
    blog.title.toLowerCase().includes(lowercaseQuery) ||
    (blog.description && blog.description.toLowerCase().includes(lowercaseQuery))
  );
};

export const getPopularBlogs = async (limit = 5) => {
  try {
    const blogs = await fetchDevToBlogs();
    return blogs
      .sort((a, b) => (b.public_reactions_count || 0) - (a.public_reactions_count || 0))
      .slice(0, limit);
  } catch (error) {
    return fallbackData
      .sort((a, b) => (b.public_reactions_count || 0) - (a.public_reactions_count || 0))
      .slice(0, limit);
  }
};

export const getRecentBlogs = async (limit = 5) => {
  try {
    const blogs = await fetchDevToBlogs();
    return blogs.slice(0, limit);
  } catch (error) {
    return fallbackData
      .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
      .slice(0, limit);
  }
};

export const getBlogTags = async () => {
  try {
    const blogs = await fetchDevToBlogs();
    const allTags = blogs.reduce((tags, blog) => {
      if (blog.tag_list) {
        tags.push(...blog.tag_list);
      }
      return tags;
    }, []);
    
    return [...new Set(allTags)].sort();
  } catch (error) {
    const allTags = fallbackData.reduce((tags, blog) => {
      if (blog.tag_list) {
        tags.push(...blog.tag_list);
      }
      return tags;
    }, []);
    
    return [...new Set(allTags)].sort();
  }
};

export const getHomepageBlogs = async () => {
  return await getRecentBlogs(4);
};