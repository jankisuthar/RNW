#include<stdio.h>

int main(){
	int num,i;
	int fact = 1;
	
	printf("Enter any positive number : ");
	scanf("%d",&num);
	
	for(i=1;i<=num;i++)
	{
		fact*=i;
	}
	printf("factorial %d = %d",num,fact);
	return 0;
}
