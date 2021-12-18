import Home from "./Home";
import Groups from "./Groups";
import React, { useState } from "react";

function GroupsMaker() {
  const [isData, setisData] = useState(false);
  const [allOfGroups, setallOfGroups] = useState("");
  //Global
  let all = [];
  const group1 = [];
  const group2 = [];
  const group3 = [];
  const group4 = [];
  const getData = (data) => {
    let lastArray = data.at(-1);
    while (lastArray[0] === "") {
      data.pop();
      lastArray = data.at(-1);
    }

    all = sortArrayByNumbers(data);
    setallOfGroups(all);

    setisData(true);
  };

  //1 sorting by the best preformence
  const sortArrayByNumbers = (data) => {
    const numOfGroups = Math.floor(data.length / 4);
    const remain = data.length % 4;

    let counter = 0;
    for (let i = 30; i > 2; i--) {
      for (let member of data) {
        const memPoints =
          parseInt(member[2]) + parseInt(member[9]) + parseInt(member[11]);
        if (memPoints === i) {
          if (group1.length < numOfGroups) {
            group1.push(data[counter]);
            data.splice(counter, 1);
          } else if (group2.length < numOfGroups) {
            group2.push(data[counter]);
            data.splice(counter, 1);
          } else if (group3.length < numOfGroups) {
            group3.push(data[counter]);
            data.splice(counter, 1);
          } else {
            group4.push(...data);
            data.splice(0);
          }
        }
        counter++;
      }
      counter = 0;
    }
    const allGroups = makeGroups(
      group1,
      group2,
      group3,
      group4,
      numOfGroups,
      remain
    );
    return allGroups;
  };

  //making all groups based on the groups before. Group1 are the manegers.
  const makeGroups = (group1, group2, group3, group4, numOfGroups, remain) => {
    const allGroups = [];
    const findGroup = () => {
      const newGroup = [];
      //taking the first member in the array
      const groupVal = [group1[0][3], group1[0][4]]; //keep track on the value of members. we want diversity.
      newGroup.push(group1[0]);
      group1.splice(0, 1);

      //comparing the first with the secound, the secound with the third and the third with the fourth.
      //The program is trying to find a 'match'
      const findSecMem = () => {
        let secMem;
        let counter = 3;
        while (secMem === undefined) {
          if (counter < 8) {
            secMem = group2.find((e, i, arr) => {
              if (
                !groupVal.includes(e[counter]) &&
                !groupVal.includes(e[counter + 1])
              ) {
                groupVal.push(e[counter], e[counter + 1]);
                arr.splice(i, 1);
                return e;
              }
            });
          } else {
            counter = 3;
            secMem = group2.find((e, i, arr) => {
              if (!groupVal.includes(e[counter])) {
                groupVal.push(e[counter]);
                arr.splice(i, 1);
                return e;
              }
              counter++;
            });
          }
          counter++;
        }

        return secMem;
      };

      const findThirdMem = () => {
        let thirdMem;
        let counter = 3;
        while (thirdMem === undefined) {
          thirdMem = group3.find((e, i, arr) => {
            if (!groupVal.includes(e[counter])) {
              groupVal.push(e[counter]);
              arr.splice(i, 1);
              return e;
            }
          });
          counter++;
        }
        return thirdMem;
      };

      const findFourthMem = () => {
        let fourthMem;
        let counter = 3;
        while (fourthMem === undefined) {
          fourthMem = group4.find((e, i, arr) => {
            if (!groupVal.includes(e[counter])) {
              groupVal.push(e[counter]);
              arr.splice(i, 1);
              return e;
            }
          });
          counter++;
        }
        return fourthMem;
      };

      newGroup.push(findSecMem(), findThirdMem(), findFourthMem());
      return newGroup;
    };

    //how many times we want the function that make one group to run,
    //it will make groups with no less than 3 members and not more than 5 members.
    if (remain === 0) {
      for (let i = 0; i < numOfGroups; i++) {
        allGroups.push(findGroup());
      }
    } else if (remain === 1) {
      for (let i = 0; i < numOfGroups - 1; i++) {
        allGroups.push(findGroup());
      }
      allGroups.push([...group4, ...group1, ...group3, ...group2]);
    } else if (remain === 2) {
      for (let i = 0; i < numOfGroups - 1; i++) {
        allGroups.push(findGroup());
      }
      const last1 = [...group1, ...group2, group4[2]];
      const last2 = [...group3, group4[1], group4[0]];
      allGroups.push(last1, last2);
    } else if (remain === 3) {
      for (let i = 0; i < numOfGroups; i++) {
        allGroups.push(findGroup());
      }
      allGroups.push(group4);
    }

    return allGroups;
  };

  if (!isData) {
    return <Home getData={getData} />;
  } else {
    return <Groups groups={allOfGroups} />;
  }
}

export default GroupsMaker;
