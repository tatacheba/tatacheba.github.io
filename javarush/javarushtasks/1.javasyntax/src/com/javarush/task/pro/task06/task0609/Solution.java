package com.javarush.task.pro.task06.task0609;

/* 
Кубический калькулятор в кубе
*/

public class Solution {
    public static void main(String[] args) {
        System.out.println(ninthDegree(2));
            ninthDegree(56L);
    }

    public static long cube(long a){
        return a*a*a;
    }

    public static long ninthDegree(long x){
        return (long) cube(cube(x));
//        return cube(x)*cube(x)*cube(x);
    }
    //напишите тут ваш код
}
