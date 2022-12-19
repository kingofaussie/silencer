import React, { useState } from "react";
import { dbService } from "fbase";

const Nweet = ({ nweetObj, isOwner }) => (
  <div>
    <h4>{nweetObj.text}</h4>
    {isOwner && (
      <>
      <button>Delete Nweet</button>
      <button>Edit Nweet</button>
      </>
    )}
  </div>
);

export default Nweet;