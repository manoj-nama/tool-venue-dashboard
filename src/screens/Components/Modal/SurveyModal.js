import React from "react";
import { Modal } from '@mui/material';
import "./SurveyModal.scss";
import { TfiCheck } from "react-icons/tfi";

const SurveyDialog = ({ onClose, open }) => {
  const [isSent, setIsSent] = React.useState(false);
  const [items, setItems] = React.useState([
    { key: 1, value: "" },
  ]);

  const handleClose = () => {
    setIsSent(false);
    onClose();
  }

  const sendSurvey = () => {
    setIsSent(true);
  }

  const addNewOption = () => {
    setItems(items => {
      const lastItem = items[items.length - 1] || {};
      return [
        ...items,
        { key: (lastItem.key || 0) + 1, value: "" }
      ];
    });
  };

  return (
    <Modal onClose={handleClose} open={open}>
      <div className="survey-dialog">
        {
          isSent ? (
            <div className="survey-form">
              <span className="ico"><TfiCheck /></span>
              <h1>Survey was Sent Successfully!</h1>
            </div>
          ) : (
            <>
              <h3 className="survey-header">New Survey</h3>
              <form className="survey-form">
                <div className="form-row">
                  <label htmlFor="survey-title">Survey Title</label>
                  <input
                    type={"text"}
                    name="survey-title"
                    id="survey-title"
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="survey-desc">Survey Description</label>
                  <input
                    type={"text"}
                    name="survey-desc"
                    id="survey-desc"
                  />
                </div>
                <p>Options</p>
                {
                  items.map(it => (
                    <div className="form-row form-item" key={it.key}>
                      <label htmlFor={`survey-${it.key}`}>{it.key}</label>
                      <input
                        type={"text"}
                        name={`survey-${it.key}`}
                        id={`survey-${it.key}`}
                      />
                    </div>
                  ))
                }
                <div className="form-row form-item actions">
                  <button type="button" onClick={addNewOption}>
                    New Option
                  </button>
                  <button type="button" className="primary" onClick={sendSurvey}>
                    Send Survey
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

export default SurveyDialog;