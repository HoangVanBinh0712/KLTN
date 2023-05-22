import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const LineChart = ({ dataLine , isDashboard = false}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  console.log(dataLine)
  let data = [
    {
      id: "employee",
      color: tokens("dark").greenAccent[500],
      data: [
        {
          x: "January",
          y: 101,
        },
        {
          x: "February",
          y: 75,
        },
        {
          x: "March",
          y: 36,
        },
        {
          x: "April",
          y: 216,
        },
        {
          x: "May",
          y: 236,
        },
        {
          x: "June",
          y: 88,
        },
        {
          x: "July",
          y: 232,
        },
        {
          x: "August",
          y: 281,
        },
        {
          x: "September",
          y: 1,
        },
        {
          x: "October",
          y: 35,
        },
        {
          x: "November",
          y: 14,
        },
        {
          x: "December",
          y: 35,
        }
      ],
    },
    {
      id: "employer",
      color: tokens("dark").blueAccent[300],
      data: [
        {
          x: "January",
          y: 212,
        },
        {
          x: "February",
          y: 190,
        },
        {
          x: "March",
          y: 270,
        },
        {
          x: "April",
          y: 9,
        },
        {
          x: "May",
          y: 75,
        },
        {
          x: "June",
          y: 175,
        },
        {
          x: "July",
          y: 33,
        },
        {
          x: "August",
          y: 189,
        },
        {
          x: "September",
          y: 97,
        },
        {
          x: "October",
          y: 87,
        },
        {
          x: "November",
          y: 299,
        },
        {
          x: "December",
          y: 251,
        },
      ],
    },
  ];

  return (
    <>
    <ResponsiveLine
      data={dataLine}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true, //loại sau tính tiếp từ loại trước count = count(trước) count(sau)
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Time (month)", // added
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5, // added
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Count", // added
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
    
    </>
  );
};

export default LineChart;
