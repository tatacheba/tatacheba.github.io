package com.javarush.task.pro.task09.task0908;

import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/* 
Двоично-шестнадцатеричный конвертер
*/

public class Solution {
    public static final String[] arrayFixBin = new String[]{"0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"};
    public static final String[] arrayFixHex = new String[]{"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"};


    public static void main(String[] args) {
        String binaryNumber = "100111010000";
        System.out.println("Двоичное число " + binaryNumber + " равно шестнадцатеричному числу " + toHex(binaryNumber));
        String hexNumber = "9d0";
        System.out.println("Шестнадцатеричное число " + hexNumber + " равно двоичному числу " + toBinary(hexNumber));
    }

    public static String toHex(String binaryNumber) {
        //напишите тут ваш код
        String hexNumber = "";
        if (binaryNumber == null || binaryNumber.equals("")) {
            return "";
        }
        while (binaryNumber.length() % 4 != 0) {
            binaryNumber = "0" + binaryNumber;
        }
        String[] strinBin = binaryNumber.split("(?=(.{4})+$)");
        for (int i = 0; i < strinBin.length; i++) {

            hexNumber += arrayFixHex[Arrays.asList(arrayFixBin).indexOf(strinBin[i])];
        }

        return hexNumber;
    }

    public static String toBinary(String hexNumber) {
        //напишите тут ваш код
        String binNumber = "";
        if (hexNumber == null || hexNumber.equals("")) {
            return "";
        }

        char[] a = hexNumber.toCharArray();
        for (int i = 0; i < a.length; i++) {

            if (Arrays.asList(arrayFixHex).indexOf(String.valueOf(a[i])) < 0) {
                return "";
            } else {
                binNumber += arrayFixBin[Arrays.asList(arrayFixHex).indexOf(String.valueOf(a[i]))];
            }
        }
        return binNumber;
    }
}
