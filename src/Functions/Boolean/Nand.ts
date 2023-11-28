import { setVariable } from "../../utils/runtime/variables";
import computeVars from "../../utils/runFunc/computeVars";
import expandArgsTypes from "../../utils/runFunc/expandArgsTypes";

module.exports = function (func: FunctionObject) {
  //compute args
  let argsType: string = "input:boolean,input:boolean,output:boolean";
  let args: Array<Args> | null = computeVars(expandArgsTypes(argsType), func);
  if (!args) return;

  //set variable
  let variable: VariableData = {
    type: "boolean",
    value: `${!(args[0].value == "true" && args[1].value == "true")}`,
  };
  setVariable(args[2].value, variable);

  //return
  return 1;
};
