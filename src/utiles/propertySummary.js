const propertySummary = async () => {
  try {
    const res = await fetch(`https://freecvbd.com/admin/api/propertySummary/3`, {
      cache: "no-store", // Ensure no caching
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
};

export default propertySummary;
