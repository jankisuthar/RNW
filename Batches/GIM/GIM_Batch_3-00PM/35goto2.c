#include<stdio.h>

int main()
{
	int a=5,b=5;
	int ans = a/b;
	
	if(a%b==0)
	{
		goto printline;
	}
	ans+=1;
	
	printline:
		printf("%d",ans);
	return 0;
}
