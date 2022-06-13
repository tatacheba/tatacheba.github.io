package com.javarush.task.pro.task09.task0912;

/* 
Проверка URL-адреса
*/

public class Solution {
    public static void main(String[] args) {
        String[] urls = {"https://javarush.ru", "https://google.com", "http://wikipedia.org", "facebook.com", "https://instagram", "codegym.cc"};
        for (String url : urls) {
            String protocol = checkProtocol(url);
            String domain = checkDomain(url);

            System.out.println("У URL-адреса - " + url + ", сетевой протокол - " + protocol + ", домен - " + domain);
        }
    }

    public static String checkProtocol(String url) {
        //напишите тут ваш код
        String[] http = {"http://", "https://"};
        String[] httpRet={"http","https"};
        for (int i = 0; i < http.length; i++) {
            if (url.startsWith(http[i])) {
                return httpRet[i];
            }
        }
        return "неизвестный";
    }

    public static String checkDomain(String url) {
        String[] domain = {"org", "com", "ru","net"};
        for (int i = 0; i < domain.length; i++) {
            if (url.endsWith(domain[i])) {
                return domain[i];
            }
        }
        return "неизвестный";
    }
}
