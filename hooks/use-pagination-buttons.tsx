import { useState, useEffect } from "react";

const usePaginationButtons = (
  totalCount: number | undefined,
  currentPage: number
) => {
  const [btnArray, setBtnArray] = useState<string[]>([]);

  useEffect(() => {
    if (totalCount) {
      const buttonCount = Math.ceil(totalCount / 9);
      let btnMap: string[];
      if (buttonCount >= 5) {
        if (currentPage === buttonCount) {
          btnMap = [
            "1",
            "...",
            (currentPage - 1).toString(),
            currentPage.toString(),
          ];
        } else if (currentPage === 1) {
          btnMap = ["1", "2", "...", buttonCount.toString()];
        } else if (currentPage === 2) {
          btnMap = ["1", "2", "3", "...", buttonCount.toString()];
        } else if (currentPage === buttonCount - 1) {
          btnMap = [
            "1",
            "...",
            (currentPage - 1).toString(),
            currentPage.toString(),
            buttonCount.toString(),
          ];
        } else {
          btnMap = [
            "1",
            (currentPage - 1).toString(),
            currentPage.toString(),
            (currentPage + 1).toString(),
            buttonCount.toString(),
          ];
          if ((buttonCount - (currentPage + 1)) !== 1) {
            btnMap.splice(4, 0, "...");
          }
          if (currentPage - 1 - 1 !== 1) {
            btnMap.splice(1, 0, "...");
          }
        }
      } else {
        btnMap = [];
        for (let i = 1; i <= buttonCount; i++) {
          btnMap.push(i.toString());
        }
      }

      setBtnArray(btnMap);
      console.log(btnMap);
    }
  }, [totalCount, currentPage]);

  return btnArray
};

export default usePaginationButtons;
