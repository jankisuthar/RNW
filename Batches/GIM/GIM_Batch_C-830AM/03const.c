#include<stdio.h>

int main(){
	int a = 23;
	
	a = 45;
	a = 20;
	const int b = 63;
	
//	b = 10;  //can't assign const variable value again
	printf("the value of a is %d\n",a);
	printf("the value of b is  %d",b);
}
