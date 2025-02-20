import io.github.cdimascio.dotenv.Dotenv;

import java.sql.*;

public class ConnectJDBC {
    static Dotenv dotenv = Dotenv.load();


    static Connection connection = null;
    static String hostName = dotenv.get("DB_HOST");
    static String dbName = dotenv.get("DB_NAME");
    static String username = dotenv.get("DB_USER");
    static String password = dotenv.get("DB_PASSWORD");

    static String connectionURL = "jdbc:mysql://" + hostName + "/" + dbName;

    public static void main(String[] args) {
        try {
            connection = DriverManager.getConnection(connectionURL, username, password);
            System.out.println("Connected to database");
            String query = "select * from orders";
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                String id = resultSet.getString("id");
                double price = resultSet.getDouble("price");
                System.out.println(id + " " + price);
            }
        } catch (
                SQLException e) {
            e.printStackTrace();
        }
    }
}
