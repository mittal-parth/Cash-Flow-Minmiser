import { Grid } from "@material-ui/core";
import { Graph as ReactGraph} from "react-d3-graph";
import {config} from "../utils/graphConfig"
const OutputGraph = ({ graphData, graphHeader }) => {

  return (
    <Grid item xs={12} md={6}>
      {Object.keys(graphData).length && Object.keys(config).length ? (
        <>
          <h4>{graphHeader}</h4>
          <ReactGraph
            id="graph-id-output" // id is mandatory
            data={graphData}
            config={config}
          />
        </>
      ) : null}
    </Grid>
  );
};

export default OutputGraph;
