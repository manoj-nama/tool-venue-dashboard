import React from "react";
import { Modal } from '@mui/material';
import "./SurveyModal.scss";
import { TfiCheck } from "react-icons/tfi";

const promotions = [
  { id: 1, title: "NRL - Food Coupon", description: "You could win a Food coupon on NRL bets!" },
  { id: 2, title: "NBA - Food Coupon", description: "You could win a Food coupon on NBA bets!" },
  { id: 3, title: "Test QLD", description: "You could win a 2023 Royal International Racing Tour!" },
  { id: 4, title: "Test SA", description: "You could win a 2023 Royal International Racing Tour!" },
];

const SurveyDialog = ({ onClose, open }) => {
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
      <div className="promotion-dialog">
        {
          isSent ? (
            <div className="promotions-container success">
              <span className="ico"><TfiCheck /></span>
              <h1>Promotion was Shared Successfully!</h1>
            </div>
          ) : (
            <>
              <h3 className="promotion-header">Promotions</h3>
              <p className="promotion-helper">Select a promotion to share:</p>
              <div className="promotions-container">
                {
                  promotions.map(it => (
                    <div onClick={sendSurvey} key={it.id} className="promotion">
                      <span className="promo-title">{it.title}</span>
                      <span className="promo-desc">{it.description}</span>
                    </div>
                  ))
                }
              </div>
            </>
          )
        }

      </div>
    </Modal>
  )
};

export default SurveyDialog;