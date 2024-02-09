#include<stdio.h>

int main()
{
	printf("This is Main function\n");
	
	int demo()
	{
		printf("This is demo function");
	}
	
	int test()
	{
		printf("This is test function\n");
	}
	test();
	demo();
	return 0;
}
