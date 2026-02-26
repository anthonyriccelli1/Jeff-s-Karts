// Google Sheets integration for inventory data

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSc39c0Hfy2_We1yVjNuL993FNJ46zRrY6hDH3mS9YCg85wHT_EtrC6o_hkXwLfG-HT3z7vjLil_gQy/pub?output=csv';

export interface InventoryItem {
  id: string;
  name: string;
  price: number | null;
  description: string;
  status: 'available' | 'sold' | 'coming_soon';
  image: string;
  features: string[];
  type: string;
}

function parseCSV(csv: string): Record<string, string>[] {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
  
  return lines.slice(1).map(line => {
    // Handle commas within quoted fields
    const values: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    
    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    return row;
  });
}

export async function getInventory(): Promise<InventoryItem[]> {
  try {
    const response = await fetch(SHEET_CSV_URL, {
      next: { revalidate: 60 } // Cache for 60 seconds, then refetch
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch inventory');
    }
    
    const csv = await response.text();
    console.log('Raw CSV:', csv); // Debug log
    const rows = parseCSV(csv);
    console.log('Parsed rows:', JSON.stringify(rows, null, 2)); // Debug log
    
    return rows
      .filter(row => row.name && row.name.trim() !== '') // Skip empty rows
      .map((row, index) => ({
        id: `cart-${index + 1}`,
        name: row.name || 'Unnamed Cart',
        price: row.price ? parseInt(row.price, 10) : null,
        description: row.description || 'Contact us for details.',
        status: (row.status?.toLowerCase() || 'available') as 'available' | 'sold' | 'coming_soon',
        image: row.image || '',
        features: row.features ? row.features.split(',').map(f => f.trim()).filter(Boolean) : [],
        type: row.type || 'Golf Cart',
      }));
  } catch (error) {
    console.error('Error fetching inventory from Google Sheets:', error);
    return [];
  }
}
