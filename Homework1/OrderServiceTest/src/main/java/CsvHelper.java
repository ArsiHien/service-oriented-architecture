import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.*;

public class CsvHelper {
    private final List<String> productIds;
    private final Iterator<String> iterator;

    public CsvHelper(String resourcePath) throws IOException {
        productIds = new ArrayList<>();

        try (InputStream inputStream = getClass().getClassLoader().getResourceAsStream(resourcePath);
             BufferedReader reader = new BufferedReader(new InputStreamReader(Objects.requireNonNull(inputStream), StandardCharsets.UTF_8))) {

            String line;
            while ((line = reader.readLine()) != null) {
                productIds.add(line.trim().replace("\"", "")); // Remove quotes if present
            }
        }

        Collections.shuffle(productIds);
        iterator = productIds.iterator();
    }

    public String getNextId() {
        if (!iterator.hasNext()) {
            Collections.shuffle(productIds);
            return productIds.get(0);
        }
        return iterator.next();
    }
}
