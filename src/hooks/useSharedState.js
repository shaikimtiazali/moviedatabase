import { useState } from "react";

export const useSharedState = () => {
  const [sharedState, setSharedState] = useState("");
  return { sharedState, setSharedState };
};
