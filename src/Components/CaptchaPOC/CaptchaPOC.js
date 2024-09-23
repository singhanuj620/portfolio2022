import ReCAPTCHA from "react-google-recaptcha";
const CaptchaPOC = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div>
      <ReCAPTCHA
        sitekey="6LcrkEwqAAAAAC6BkQnziYEDIobeb9uv397tNEdM"
        onChange={onChange}
      />
    </div>
  );
};

export default CaptchaPOC;