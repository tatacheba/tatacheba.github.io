package com.javarush.task.pro.task09.task0905;

import java.util.regex.Pattern;

/* 
Восьмеричный конвертер
*/

public class Solution {
    public static void main(String[] args) {
        int decimalNumber = 21;
        System.out.println("Десятичное число " + decimalNumber + " равно восьмеричному числу " + toOctal(decimalNumber));
        int octalNumber = 25;
        System.out.println("Восьмеричное число " + octalNumber + " равно десятичному числу " + toDecimal(octalNumber));
    }

    public static int toOctal(int decimalNumber) {
        //напишите тут ваш код
        int i = 0;
        int a=decimalNumber;
        double octNumber = 0;
        while (decimalNumber != 0) {
            octNumber = octNumber + ((decimalNumber % 8) * Math.pow(10, i));
            decimalNumber = decimalNumber / 8;
            i++;
        }
        if (a > 0) {
            return (int) octNumber;
        } else {

            return 0;

        }

    }

    public static int toDecimal(int octalNumber) {
        //напишите тут ваш код
        int i = 0;
        int a=octalNumber;
        double decimalNumber = 0;
        while (octalNumber != 0) {
            decimalNumber = decimalNumber + ((octalNumber % 10) * Math.pow(8, i));
            octalNumber = octalNumber / 10;
            i++;
        }
        if (a <= 0) {
            return 0;
        } else {


            return (int) decimalNumber;
        }

    }
}
