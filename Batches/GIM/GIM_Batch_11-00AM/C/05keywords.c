#include<stdio.h>


//we can not use keywords as a identifier
int main(){
	int a;
	a = 12;
	int continue;  //not valid
	continue = 85; //can't use keyword as a variable
	a = 78;
	
	
	printf("sum of two values are : %d",a+continue);
	return 0;
}
