import ReCAPTCHA from "react-google-recaptcha";
const CaptchaPOC = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div>
      <ReCAPTCHA
        sitekey="6LfpoUwqAAAAAOCOc_hYAoC3KUwSTwfruIPOv7UK"
        onChange={onChange}
      />
    </div>
  );
};

export default CaptchaPOC;
