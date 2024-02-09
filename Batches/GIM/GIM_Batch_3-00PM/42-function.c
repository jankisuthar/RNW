#include<stdio.h>
//function : function is a bolock of code whoch we can use multitime
int main()
{
	printf("This is main function\n");
	demo();
	test();
	return 0;
}

int demo()
{
	test();
	printf("This is demo function\n");
}
int test()
{
	printf("This is test function\n");
}
