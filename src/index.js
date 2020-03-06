/**
 * 倒计时
 * 使用场景：发送短信码倒计时验证
 * 使用方法：countDown(60,(time)=>{
 *     console.log(time);
 * })
 * @param time
 * @param callback
 */
const countDown =  (count,callback) =>{
    let timer = null ;
    if(!count){
        throw new Error("count参数不能为空") ;
        return  ;
    }
    if(isNaN(count)){
        throw new Error("count参数不能非数字") ;
        return  ;
    }
    const func = ()=>{
        if( +count< 1 && timer){
            clearInterval(timer);
        }
        callback(+count,+count< 1);
        +count-- ;
    };
    func();
    timer = setInterval(func,1000);
};
export default {
    countDown
}
