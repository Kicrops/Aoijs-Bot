/*
 FunctionData = {
   {@name} : string ,
   {@type} : "djs" | "aoi.js" ,
   {@params?} : Array<string> ,
   {@return?} : { 
      {@code?} : boolean ,
      {@exec?} : boolean ,
      {@id?} : boolean ,
      {@sendMessage?} : boolean 
      } ,
   {@code} : function | string 
 }
 
 {@NOTE} : {@params} is only for {@type} "aoi.js" 
 */
module.exports = [
  {
    name : "$tertiary" ,
    type : "djs" ,
    code : async d => {
      const data = d.util.openFunc(d);
      if(data.err) return d.error(data.err);
      
      let [ condition,trueText,falseText ] = data.inside.splits;
      d.helpers.CheckCondition(d
.helpersmustEscape(condition)
    }
  }
]
