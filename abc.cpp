// bucket sort of integers taking user input as number of elements and elements
// input
// input number of elements : 7
// elements of an array : 23 32 26 36 11 41 77

//output
// sorted array - 11 23 26 32 36 41 77

//input
// input number of elements : 6
// elements of an array : 11 22 33 44 55 66

//output
// sorted array : 11 22 33 44 55 66

#include <iostream>
using namespace std;

void bucketSort(int arr[], int n)
{
	int max = arr[0];
	for (int i = 1; i < n; i++)
	{
		if (arr[i] > max)
			max = arr[i];
	}
	int bucket[max + 1] = {0};
	for (int i = 0; i < n; i++)
	{
		bucket[arr[i]]++;
	}
	int j = 0;
	for (int i = 0; i < max + 1; i++)
	{
		while (bucket[i] > 0)
		{
			arr[j++] = i;
			bucket[i]--;
		}
	}
}

int main()
{
	int n;
	cout << "input number of elements : ";
	cin >> n;
	int arr[n];
	cout << "elements of an array : ";
	for (int i = 0; i < n; i++)
	{
		cin >> arr[i];
	}
	bucketSort(arr, n);
	cout << "sorted array : ";
	for (int i = 0; i < n; i++)
	{
		cout << arr[i] << " ";
	}
	return 0;
}

