#include<stdio.h>

int main()
{
	char num = 'B';
	
	switch(num)
	{
		case 'A':
			printf("value 1");
			break;
		case 'B':
			printf("value 2");
			break;
		case 'C':
			printf("value 3");
			break;
		default:
			printf("no match found");
	}
	return 0;
}
