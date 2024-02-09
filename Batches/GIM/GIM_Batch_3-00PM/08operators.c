#include<stdio.h>

int main(){
	int a = 5;
	int b = 4;
	
	//Arithmatic operator
	printf("Addditon of a+b : %d\n",a+b);
	printf("Sustraction of a-b : %d\n",a-b);
	printf("Multiplication of a*b : %d\n",a*b);
	printf("division of a/b : %d\n",a/b);
	printf("Modulo of a%b : %d\n",a%b);
	
	
	//unary operator
	printf("++a: %d\n",++a);
	printf("--a:%d\n",--a);
	
	//relational operator
	printf("a == b:%d\n",a==b);
	printf("a != b: %d\n",a!=b);
	printf("a > b: %d\n",a>b);
	printf("a < b: %d\n",a<b);
	printf("a >= b: %d\n",a>=b);
	return 0;
}
