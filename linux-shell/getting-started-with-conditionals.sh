#!/bin/bash
#
# https://www.hackerrank.com/challenges/bash-tutorials---getting-started-with-conditionals/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
#
read ans
if [[ $ans = "y" || $ans = "Y" ]]
    then
        echo "YES"
    else
        echo "NO"
fi