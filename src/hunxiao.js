const myname = 'wumengzhao';
const myhobby = 'reading';
const fn = function(){
  const newValue = myname + myhobby + 'ddd';
  const myfuncction = function(){
    return myname + myhobby + newValue;
  }
  return myfuncction();
}