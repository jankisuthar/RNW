#include<stdio.h>

int main()
{
	int start=1,end=10;
	
	int curr =start;
	
	printline:
		printf("%d\n",curr);
		
		if(curr<end)
		{
			curr++;
			goto printline;
		}
		return 0;
}
