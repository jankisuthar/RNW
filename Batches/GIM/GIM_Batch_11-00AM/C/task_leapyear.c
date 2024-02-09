#include<stdio.h>

int main()
{
	int curryear,endyear;

	
	printf("Enter the starting Year : ");
	scanf("%d",&curryear);
	
	printf("Enter the Ending Year : ");
	scanf("%d",&endyear);
	
	while(curryear<=endyear)
	{
	  	
			printf("%d\n",curryear);
			curryear+=4;
	}
	return 0;
}
