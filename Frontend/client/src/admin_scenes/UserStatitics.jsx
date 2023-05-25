import { Box } from "@mui/material";
import { tokens } from "../theme";
import Header from "../components/charts/Header";
import LineChart from "../components/charts/LineChart";

const UserStatitics = () => {

    const dataDefault = [
        {
          x: "January",
          y: 0,
        },
        {
          x: "February",
          y: 0,
        },
        {
          x: "March",
          y: 0,
        },
        {
          x: "April",
          y: 0,
        },
        {
          x: "May",
          y: 0,
        },
        {
          x: "June",
          y: 0,
        },
        {
          x: "July",
          y: 0,
        },
        {
          x: "August",
          y: 0,
        },
        {
          x: "September",
          y: 0,
        },
        {
          x: "October",
          y: 0,
        },
        {
          x: "November",
          y: 0,
        },
        {
          x: "December",
          y: 0,
        }
      ]

    const data = [
        {
            id: "employee",
            color: tokens("dark").greenAccent[500],
            data: [
                {
                    x: "1",
                    y: 101,
                },
                {
                    x: "2",
                    y: 75,
                },
                {
                    x: "3",
                    y: 36,
                },
                {
                    x: "4",
                    y: 216,
                },
                {
                    x: "5",
                    y: 236,
                },
                {
                    x: "6",
                    y: 88,
                },
                {
                    x: "7",
                    y: 232,
                },
                {
                    x: "8",
                    y: 281,
                },
                {
                    x: "9",
                    y: 1,
                },
                {
                    x: "10",
                    y: 35,
                },
                {
                    x: "11",
                    y: 14,
                },
                {
                    x: "12",
                    y: 35,
                }
            ],
        },]
    
        const formatData = (arr) => {
            const m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let newData = [];
            let highMonth = 1;
            for (let i = 1; i < 12; i++) {
              const obj = arr.find((item) => item.month === i);
              if (obj !== undefined) {
                highMonth = obj.month;
              }
            }
            for (let i = 12; i > 0; i--) {
              if (i > highMonth) newData.unshift({ x: m[i - 1], y: 0 });
              else {
                const obj = arr.find((item) => item.month === i);
                if (obj === undefined) {
                  newData.splice(12 - highMonth, 0, { x: m[i - 1], y: 0 });
                } else {
                  newData.splice(12 - highMonth, 0, { x: m[i - 1], y: obj.value });
                }
              }
            }
            return newData;
          };
    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Represent the change of components using a Line Chart" />
            <Box height="75vh">
                <LineChart dataLine={data} />
            </Box>
        </Box>
    );
};
export default UserStatitics