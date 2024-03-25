import React from "react";
import AppContainerFluid from "../AppContainerFluid/AppContainerFluid";
import AppRow from "../AppRow/AppRow";
import classStyles from "./ReferModal.module.css";
import { v4 as uuidv4 } from "uuid";
import {
  WhatsappShareButton,
  TelegramShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TwitterIcon,
  WhatsappIcon,
  FacebookIcon,
  TelegramIcon,
  LinkedinIcon,
  FacebookShareButton,
  InstapaperShareButton,
  InstapaperIcon,
} from "react-share";

function ReferModalFooter({
  shareUrl = process.env.REACT_APP_WEB_URL,
  heading,
  quote = "Newton",
  shareTitle = "Newton",
  hashtags = ["newton"],
}) {
  let REFERALs = [
    {
      id: uuidv4(),
      component: (
        <WhatsappShareButton title={shareTitle} url={shareUrl}>
          <WhatsappIcon quote={quote} size={32} round={true} />
        </WhatsappShareButton>
      ),
    },
    {
      id: uuidv4(),
      component: (
        <FacebookShareButton quote={quote} url={shareUrl}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      ),
    },

    {
      id: uuidv4(),
      component: (
        <LinkedinShareButton title={shareTitle} url={shareUrl}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
      ),
    },
    {
      id: uuidv4(),
      component: (
        <TwitterShareButton
          hashtags={hashtags}
          title={shareTitle}
          url={shareUrl}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      ),
    },
    {
      id: uuidv4(),
      component: (
        <TelegramShareButton title={shareTitle} url={shareUrl}>
          <TelegramIcon size={32} round={true} />
        </TelegramShareButton>
      ),
    },
    {
      id: uuidv4(),
      component: (
        <InstapaperShareButton title={shareTitle} url={shareUrl}>
          <InstapaperIcon size={32} round={true} />
        </InstapaperShareButton>
      ),
    },
  ];

  return (
    <div>
      <AppContainerFluid>
        {}
        <center>
          <span className="text-muted text-center">You can share via</span>
        </center>

        <AppRow className={classStyles.footerIcons}>
          {REFERALs.map((ref) => {
            return (
              <div key={ref.id} className="mt-1">
                {ref.component}
              </div>
            );
          })}
        </AppRow>
      </AppContainerFluid>
    </div>
  );
}

export default ReferModalFooter;
