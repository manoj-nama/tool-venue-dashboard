import React from "react";
import { Modal } from '@mui/material';
import "./SurveyModal.scss";
import { TfiCheck } from "react-icons/tfi";

const WeTalkDialog = ({ onClose, open }) => {
  const [isSent, setIsSent] = React.useState(false);

  const handleClose = () => {
    setIsSent(false);
    onClose();
  }

  const sendSurvey = () => {
    setIsSent(true);
  }

  return (
    <Modal onClose={handleClose} open={open}>
      <div className="survey-dialog">
        {
          isSent ? (
            <div className="survey-form">
              <span className="ico"><TfiCheck /></span>
              <h1>Announcement Sent Successfully!</h1>
            </div>
          ) : (
            <>
              <h3 className="survey-header">New Announcement</h3>
              <form className="survey-form">
                <div className="form-row">
                  <label htmlFor="survey-desc">Message to send</label>
                  <textarea name="survey-desc" id="survey-desc"></textarea>
                </div>
                <div className="form-row form-item actions">
                  <button type="button" className="primary" onClick={sendSurvey}>
                    Send Announcement
                  </button>
                </div>
              </form>
            </>
          )
        }

      </div>
    </Modal>
  )
};

export default WeTalkDialog;