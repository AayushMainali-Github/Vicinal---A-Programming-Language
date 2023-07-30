import { setVariable } from '../../Runtime/variables';
import { FunctionObject, Args } from '../../types/Function';
import { VariableData } from '../../types/Variable';
import computeVars from '../../utils/runFunc/computeVars';
import expandArgsTypes from '../../utils/runFunc/expandArgsTypes';

module.exports = function (func: FunctionObject) {
  //compute args
  let argsType: string = 'nameinput:number';
  let args: Array<Args> | null = computeVars(expandArgsTypes(argsType), func);
  if (!args || !args[0].name) return;

  //set variable
  let variable: VariableData = {
    type: 'string',
    value: args[0].value.toString(),
  };
  setVariable(args[0].name, variable);
  //return
  return 1;
};
