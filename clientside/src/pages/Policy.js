import React from "react";
import Layout from "../components/Layout/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={'privacy policy'}> 
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://usercentrics.com/wp-content/uploads/2021/12/uc_blog_hero_500px_privacy_policy_blue_01.svg"
            alt="contactus" width="512" height="512"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;