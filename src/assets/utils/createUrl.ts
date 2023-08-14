export const createUrl = (
  baseUrl: string,
  searchParams?: Record<string, string>
): string => {
  const params = new URLSearchParams(searchParams).toString();

  return `${baseUrl}${params ? `?${params}` : ''}`;
};
