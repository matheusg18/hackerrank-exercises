#!/bin/bash
#
# https://www.hackerrank.com/challenges/bash-tutorials---more-on-conditionals/problem?h_r=next-challenge&h_v=zen
#
read x
read y
read z
if [[ $x -eq $y && $x -eq $z ]]
    then
        echo "EQUILATERAL"
    elif [[ $x -eq $y || $x -eq $z || $y -eq $z ]]
        then
            echo "ISOSCELES"
    else
        echo "SCALENE"
fi