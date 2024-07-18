//when we are searching on input then setterm is called multiple times in miliseconds at every change in term length but if we want to execute setterm in gap of two seconds after input, we can use debouncing..
function debounce(cb,delay=2000){
          let timerid;
          return (...args)=>{
                    console.log(...args);
                    clearTimeout(timerid);
                 timerid= setTimeout(() => {
                    cb(...args)
                    }, delay);
          }
}
export default debounce