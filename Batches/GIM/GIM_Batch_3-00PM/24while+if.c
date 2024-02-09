#include<stdio.h>

int main()
{
	int i = 1;
	int limit;
	
	printf("Enter any limit : ");
	scanf("%d",&limit);
	
	while(i<=limit)
	{
		if(i%2==0)
		{
			printf("%d\t",i);
			
		}
		i++;
	}
	return 0;
}
