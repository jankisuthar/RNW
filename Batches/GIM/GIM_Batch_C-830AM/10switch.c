#include<stdio.h>

int main(){
	char c = 'p';
	
	switch(c)
	{
	
	case 'M':
		printf("Today is Monday");
		break;
	case 'T':
		printf("Today is Tuesday");
		break;
	case 'W':
		printf("Today is Wednesday");
		break;
	case 't':
		printf("Today is Thursday");
		break;
	case 'F':
		printf("Today is friday");
		break;
	case 'S':
		printf("Today is Saturday");
		break;
	default:
		printf("Today is Sunday");
		}
		return 0;
}
