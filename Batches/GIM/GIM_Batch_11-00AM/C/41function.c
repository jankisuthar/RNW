#include<stdio.h>

//function : function is a block of code which we can reuse multi time
int demo(){
	printf("This is demo function\n");
}
int test(){
	printf("Thsi si test function");

}
int main(){
	printf("This is main function\n");
	demo();
	test();
	return 0;
}


