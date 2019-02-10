import React from "react";

const LoginError = ({ handleClose, showError, children }) => {
    const showHideClassName = showError ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassname}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

export default LoginError;