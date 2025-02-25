package infrastructure;

import domain.Product;
import domain.ProductRepository;
import io.github.cdimascio.dotenv.Dotenv;

import java.sql.*;
import java.util.Optional;

public class JdbcProductRepository implements ProductRepository {
    static Dotenv dotenv = Dotenv.load();

    static String hostName = dotenv.get("DB_HOST");
    static String dbName = dotenv.get("DB_NAME");
    static String username = dotenv.get("DB_USER");
    static String password = dotenv.get("DB_PASSWORD");

    static String connectionURL = "jdbc:mysql://" + hostName + "/" + dbName;

    @Override
    public Optional<Product> findById(String productId) {
        try (Connection connection = DriverManager.getConnection(connectionURL, username, password)) {
            String query = "select * from orders where id = '" + productId + "'";
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);
            if (resultSet.next()) {
                return Optional.of(new Product(resultSet.getString("id"), resultSet.getDouble("price")));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return Optional.empty();
    }
}
