import { useMemo } from "react";

export const UserComponent = () => {
    console.log('user');

    function hardCalc () {              //функція, виконання якої займає значний час
        let tempval: number = 0;
        for (let c = 0; c<1000000; c++ ){
            tempval = tempval+c; 
        }
        return tempval;
    }

    const hardCalcVal = useMemo(() => {  //використовуємо хук для збереження результату обчислень
        console.log('calc...');          // та запобігання повторного виклику функції обчислення
        const hc = hardCalc();           // можна вказати в параметрах (масиві) залежності
        console.log('calc complete');    // (змінні, при зміні яких буде виконуватись переобчислення)
        return hc;
    },[])

    return(
        <div className="User">
            <p>value = {hardCalcVal}</p>
            User data
        </div>
    )
}