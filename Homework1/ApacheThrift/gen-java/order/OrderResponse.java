/**
 * Autogenerated by Thrift Compiler (0.21.0)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
package order;

@SuppressWarnings({"cast", "rawtypes", "serial", "unchecked", "unused"})
@javax.annotation.Generated(value = "Autogenerated by Thrift Compiler (0.21.0)", date = "2025-02-22")
public class OrderResponse implements org.apache.thrift.TBase<OrderResponse, OrderResponse._Fields>, java.io.Serializable, Cloneable, Comparable<OrderResponse> {
  private static final org.apache.thrift.protocol.TStruct STRUCT_DESC = new org.apache.thrift.protocol.TStruct("OrderResponse");

  private static final org.apache.thrift.protocol.TField PRODUCT_ID_FIELD_DESC = new org.apache.thrift.protocol.TField("productId", org.apache.thrift.protocol.TType.STRING, (short)1);
  private static final org.apache.thrift.protocol.TField UNIT_PRICE_FIELD_DESC = new org.apache.thrift.protocol.TField("unitPrice", org.apache.thrift.protocol.TType.DOUBLE, (short)2);
  private static final org.apache.thrift.protocol.TField QUANTITY_FIELD_DESC = new org.apache.thrift.protocol.TField("quantity", org.apache.thrift.protocol.TType.I32, (short)3);
  private static final org.apache.thrift.protocol.TField TOTAL_PRICE_FIELD_DESC = new org.apache.thrift.protocol.TField("totalPrice", org.apache.thrift.protocol.TType.DOUBLE, (short)4);

  private static final org.apache.thrift.scheme.SchemeFactory STANDARD_SCHEME_FACTORY = new OrderResponseStandardSchemeFactory();
  private static final org.apache.thrift.scheme.SchemeFactory TUPLE_SCHEME_FACTORY = new OrderResponseTupleSchemeFactory();

  public @org.apache.thrift.annotation.Nullable java.lang.String productId; // required
  public double unitPrice; // required
  public int quantity; // required
  public double totalPrice; // required

  /** The set of fields this struct contains, along with convenience methods for finding and manipulating them. */
  public enum _Fields implements org.apache.thrift.TFieldIdEnum {
    PRODUCT_ID((short)1, "productId"),
    UNIT_PRICE((short)2, "unitPrice"),
    QUANTITY((short)3, "quantity"),
    TOTAL_PRICE((short)4, "totalPrice");

    private static final java.util.Map<java.lang.String, _Fields> byName = new java.util.HashMap<java.lang.String, _Fields>();

    static {
      for (_Fields field : java.util.EnumSet.allOf(_Fields.class)) {
        byName.put(field.getFieldName(), field);
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, or null if its not found.
     */
    @org.apache.thrift.annotation.Nullable
    public static _Fields findByThriftId(int fieldId) {
      switch(fieldId) {
        case 1: // PRODUCT_ID
          return PRODUCT_ID;
        case 2: // UNIT_PRICE
          return UNIT_PRICE;
        case 3: // QUANTITY
          return QUANTITY;
        case 4: // TOTAL_PRICE
          return TOTAL_PRICE;
        default:
          return null;
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, throwing an exception
     * if it is not found.
     */
    public static _Fields findByThriftIdOrThrow(int fieldId) {
      _Fields fields = findByThriftId(fieldId);
      if (fields == null) throw new java.lang.IllegalArgumentException("Field " + fieldId + " doesn't exist!");
      return fields;
    }

    /**
     * Find the _Fields constant that matches name, or null if its not found.
     */
    @org.apache.thrift.annotation.Nullable
    public static _Fields findByName(java.lang.String name) {
      return byName.get(name);
    }

    private final short _thriftId;
    private final java.lang.String _fieldName;

    _Fields(short thriftId, java.lang.String fieldName) {
      _thriftId = thriftId;
      _fieldName = fieldName;
    }

    @Override
    public short getThriftFieldId() {
      return _thriftId;
    }

    @Override
    public java.lang.String getFieldName() {
      return _fieldName;
    }
  }

  // isset id assignments
  private static final int __UNITPRICE_ISSET_ID = 0;
  private static final int __QUANTITY_ISSET_ID = 1;
  private static final int __TOTALPRICE_ISSET_ID = 2;
  private byte __isset_bitfield = 0;
  public static final java.util.Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> metaDataMap;
  static {
    java.util.Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> tmpMap = new java.util.EnumMap<_Fields, org.apache.thrift.meta_data.FieldMetaData>(_Fields.class);
    tmpMap.put(_Fields.PRODUCT_ID, new org.apache.thrift.meta_data.FieldMetaData("productId", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.UNIT_PRICE, new org.apache.thrift.meta_data.FieldMetaData("unitPrice", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.DOUBLE)));
    tmpMap.put(_Fields.QUANTITY, new org.apache.thrift.meta_data.FieldMetaData("quantity", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.I32)));
    tmpMap.put(_Fields.TOTAL_PRICE, new org.apache.thrift.meta_data.FieldMetaData("totalPrice", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.DOUBLE)));
    metaDataMap = java.util.Collections.unmodifiableMap(tmpMap);
    org.apache.thrift.meta_data.FieldMetaData.addStructMetaDataMap(OrderResponse.class, metaDataMap);
  }

  public OrderResponse() {
  }

  public OrderResponse(
    java.lang.String productId,
    double unitPrice,
    int quantity,
    double totalPrice)
  {
    this();
    this.productId = productId;
    this.unitPrice = unitPrice;
    setUnitPriceIsSet(true);
    this.quantity = quantity;
    setQuantityIsSet(true);
    this.totalPrice = totalPrice;
    setTotalPriceIsSet(true);
  }

  /**
   * Performs a deep copy on <i>other</i>.
   */
  public OrderResponse(OrderResponse other) {
    __isset_bitfield = other.__isset_bitfield;
    if (other.isSetProductId()) {
      this.productId = other.productId;
    }
    this.unitPrice = other.unitPrice;
    this.quantity = other.quantity;
    this.totalPrice = other.totalPrice;
  }

  @Override
  public OrderResponse deepCopy() {
    return new OrderResponse(this);
  }

  @Override
  public void clear() {
    this.productId = null;
    setUnitPriceIsSet(false);
    this.unitPrice = 0.0;
    setQuantityIsSet(false);
    this.quantity = 0;
    setTotalPriceIsSet(false);
    this.totalPrice = 0.0;
  }

  @org.apache.thrift.annotation.Nullable
  public java.lang.String getProductId() {
    return this.productId;
  }

  public OrderResponse setProductId(@org.apache.thrift.annotation.Nullable java.lang.String productId) {
    this.productId = productId;
    return this;
  }

  public void unsetProductId() {
    this.productId = null;
  }

  /** Returns true if field productId is set (has been assigned a value) and false otherwise */
  public boolean isSetProductId() {
    return this.productId != null;
  }

  public void setProductIdIsSet(boolean value) {
    if (!value) {
      this.productId = null;
    }
  }

  public double getUnitPrice() {
    return this.unitPrice;
  }

  public OrderResponse setUnitPrice(double unitPrice) {
    this.unitPrice = unitPrice;
    setUnitPriceIsSet(true);
    return this;
  }

  public void unsetUnitPrice() {
    __isset_bitfield = org.apache.thrift.EncodingUtils.clearBit(__isset_bitfield, __UNITPRICE_ISSET_ID);
  }

  /** Returns true if field unitPrice is set (has been assigned a value) and false otherwise */
  public boolean isSetUnitPrice() {
    return org.apache.thrift.EncodingUtils.testBit(__isset_bitfield, __UNITPRICE_ISSET_ID);
  }

  public void setUnitPriceIsSet(boolean value) {
    __isset_bitfield = org.apache.thrift.EncodingUtils.setBit(__isset_bitfield, __UNITPRICE_ISSET_ID, value);
  }

  public int getQuantity() {
    return this.quantity;
  }

  public OrderResponse setQuantity(int quantity) {
    this.quantity = quantity;
    setQuantityIsSet(true);
    return this;
  }

  public void unsetQuantity() {
    __isset_bitfield = org.apache.thrift.EncodingUtils.clearBit(__isset_bitfield, __QUANTITY_ISSET_ID);
  }

  /** Returns true if field quantity is set (has been assigned a value) and false otherwise */
  public boolean isSetQuantity() {
    return org.apache.thrift.EncodingUtils.testBit(__isset_bitfield, __QUANTITY_ISSET_ID);
  }

  public void setQuantityIsSet(boolean value) {
    __isset_bitfield = org.apache.thrift.EncodingUtils.setBit(__isset_bitfield, __QUANTITY_ISSET_ID, value);
  }

  public double getTotalPrice() {
    return this.totalPrice;
  }

  public OrderResponse setTotalPrice(double totalPrice) {
    this.totalPrice = totalPrice;
    setTotalPriceIsSet(true);
    return this;
  }

  public void unsetTotalPrice() {
    __isset_bitfield = org.apache.thrift.EncodingUtils.clearBit(__isset_bitfield, __TOTALPRICE_ISSET_ID);
  }

  /** Returns true if field totalPrice is set (has been assigned a value) and false otherwise */
  public boolean isSetTotalPrice() {
    return org.apache.thrift.EncodingUtils.testBit(__isset_bitfield, __TOTALPRICE_ISSET_ID);
  }

  public void setTotalPriceIsSet(boolean value) {
    __isset_bitfield = org.apache.thrift.EncodingUtils.setBit(__isset_bitfield, __TOTALPRICE_ISSET_ID, value);
  }

  @Override
  public void setFieldValue(_Fields field, @org.apache.thrift.annotation.Nullable java.lang.Object value) {
    switch (field) {
    case PRODUCT_ID:
      if (value == null) {
        unsetProductId();
      } else {
        setProductId((java.lang.String)value);
      }
      break;

    case UNIT_PRICE:
      if (value == null) {
        unsetUnitPrice();
      } else {
        setUnitPrice((java.lang.Double)value);
      }
      break;

    case QUANTITY:
      if (value == null) {
        unsetQuantity();
      } else {
        setQuantity((java.lang.Integer)value);
      }
      break;

    case TOTAL_PRICE:
      if (value == null) {
        unsetTotalPrice();
      } else {
        setTotalPrice((java.lang.Double)value);
      }
      break;

    }
  }

  @org.apache.thrift.annotation.Nullable
  @Override
  public java.lang.Object getFieldValue(_Fields field) {
    switch (field) {
    case PRODUCT_ID:
      return getProductId();

    case UNIT_PRICE:
      return getUnitPrice();

    case QUANTITY:
      return getQuantity();

    case TOTAL_PRICE:
      return getTotalPrice();

    }
    throw new java.lang.IllegalStateException();
  }

  /** Returns true if field corresponding to fieldID is set (has been assigned a value) and false otherwise */
  @Override
  public boolean isSet(_Fields field) {
    if (field == null) {
      throw new java.lang.IllegalArgumentException();
    }

    switch (field) {
    case PRODUCT_ID:
      return isSetProductId();
    case UNIT_PRICE:
      return isSetUnitPrice();
    case QUANTITY:
      return isSetQuantity();
    case TOTAL_PRICE:
      return isSetTotalPrice();
    }
    throw new java.lang.IllegalStateException();
  }

  @Override
  public boolean equals(java.lang.Object that) {
    if (that instanceof OrderResponse)
      return this.equals((OrderResponse)that);
    return false;
  }

  public boolean equals(OrderResponse that) {
    if (that == null)
      return false;
    if (this == that)
      return true;

    boolean this_present_productId = true && this.isSetProductId();
    boolean that_present_productId = true && that.isSetProductId();
    if (this_present_productId || that_present_productId) {
      if (!(this_present_productId && that_present_productId))
        return false;
      if (!this.productId.equals(that.productId))
        return false;
    }

    boolean this_present_unitPrice = true;
    boolean that_present_unitPrice = true;
    if (this_present_unitPrice || that_present_unitPrice) {
      if (!(this_present_unitPrice && that_present_unitPrice))
        return false;
      if (this.unitPrice != that.unitPrice)
        return false;
    }

    boolean this_present_quantity = true;
    boolean that_present_quantity = true;
    if (this_present_quantity || that_present_quantity) {
      if (!(this_present_quantity && that_present_quantity))
        return false;
      if (this.quantity != that.quantity)
        return false;
    }

    boolean this_present_totalPrice = true;
    boolean that_present_totalPrice = true;
    if (this_present_totalPrice || that_present_totalPrice) {
      if (!(this_present_totalPrice && that_present_totalPrice))
        return false;
      if (this.totalPrice != that.totalPrice)
        return false;
    }

    return true;
  }

  @Override
  public int hashCode() {
    int hashCode = 1;

    hashCode = hashCode * 8191 + ((isSetProductId()) ? 131071 : 524287);
    if (isSetProductId())
      hashCode = hashCode * 8191 + productId.hashCode();

    hashCode = hashCode * 8191 + org.apache.thrift.TBaseHelper.hashCode(unitPrice);

    hashCode = hashCode * 8191 + quantity;

    hashCode = hashCode * 8191 + org.apache.thrift.TBaseHelper.hashCode(totalPrice);

    return hashCode;
  }

  @Override
  public int compareTo(OrderResponse other) {
    if (!getClass().equals(other.getClass())) {
      return getClass().getName().compareTo(other.getClass().getName());
    }

    int lastComparison = 0;

    lastComparison = java.lang.Boolean.compare(isSetProductId(), other.isSetProductId());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetProductId()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.productId, other.productId);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = java.lang.Boolean.compare(isSetUnitPrice(), other.isSetUnitPrice());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetUnitPrice()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.unitPrice, other.unitPrice);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = java.lang.Boolean.compare(isSetQuantity(), other.isSetQuantity());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetQuantity()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.quantity, other.quantity);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = java.lang.Boolean.compare(isSetTotalPrice(), other.isSetTotalPrice());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetTotalPrice()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.totalPrice, other.totalPrice);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    return 0;
  }

  @org.apache.thrift.annotation.Nullable
  @Override
  public _Fields fieldForId(int fieldId) {
    return _Fields.findByThriftId(fieldId);
  }

  @Override
  public void read(org.apache.thrift.protocol.TProtocol iprot) throws org.apache.thrift.TException {
    scheme(iprot).read(iprot, this);
  }

  @Override
  public void write(org.apache.thrift.protocol.TProtocol oprot) throws org.apache.thrift.TException {
    scheme(oprot).write(oprot, this);
  }

  @Override
  public java.lang.String toString() {
    java.lang.StringBuilder sb = new java.lang.StringBuilder("OrderResponse(");
    boolean first = true;

    sb.append("productId:");
    if (this.productId == null) {
      sb.append("null");
    } else {
      sb.append(this.productId);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("unitPrice:");
    sb.append(this.unitPrice);
    first = false;
    if (!first) sb.append(", ");
    sb.append("quantity:");
    sb.append(this.quantity);
    first = false;
    if (!first) sb.append(", ");
    sb.append("totalPrice:");
    sb.append(this.totalPrice);
    first = false;
    sb.append(")");
    return sb.toString();
  }

  public void validate() throws org.apache.thrift.TException {
    // check for required fields
    // check for sub-struct validity
  }

  private void writeObject(java.io.ObjectOutputStream out) throws java.io.IOException {
    try {
      write(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(out)));
    } catch (org.apache.thrift.TException te) {
      throw new java.io.IOException(te);
    }
  }

  private void readObject(java.io.ObjectInputStream in) throws java.io.IOException, java.lang.ClassNotFoundException {
    try {
      // it doesn't seem like you should have to do this, but java serialization is wacky, and doesn't call the default constructor.
      __isset_bitfield = 0;
      read(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(in)));
    } catch (org.apache.thrift.TException te) {
      throw new java.io.IOException(te);
    }
  }

  private static class OrderResponseStandardSchemeFactory implements org.apache.thrift.scheme.SchemeFactory {
    @Override
    public OrderResponseStandardScheme getScheme() {
      return new OrderResponseStandardScheme();
    }
  }

  private static class OrderResponseStandardScheme extends org.apache.thrift.scheme.StandardScheme<OrderResponse> {

    @Override
    public void read(org.apache.thrift.protocol.TProtocol iprot, OrderResponse struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TField schemeField;
      iprot.readStructBegin();
      while (true)
      {
        schemeField = iprot.readFieldBegin();
        if (schemeField.type == org.apache.thrift.protocol.TType.STOP) { 
          break;
        }
        switch (schemeField.id) {
          case 1: // PRODUCT_ID
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.productId = iprot.readString();
              struct.setProductIdIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 2: // UNIT_PRICE
            if (schemeField.type == org.apache.thrift.protocol.TType.DOUBLE) {
              struct.unitPrice = iprot.readDouble();
              struct.setUnitPriceIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 3: // QUANTITY
            if (schemeField.type == org.apache.thrift.protocol.TType.I32) {
              struct.quantity = iprot.readI32();
              struct.setQuantityIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 4: // TOTAL_PRICE
            if (schemeField.type == org.apache.thrift.protocol.TType.DOUBLE) {
              struct.totalPrice = iprot.readDouble();
              struct.setTotalPriceIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          default:
            org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
        }
        iprot.readFieldEnd();
      }
      iprot.readStructEnd();

      // check for required fields of primitive type, which can't be checked in the validate method
      struct.validate();
    }

    @Override
    public void write(org.apache.thrift.protocol.TProtocol oprot, OrderResponse struct) throws org.apache.thrift.TException {
      struct.validate();

      oprot.writeStructBegin(STRUCT_DESC);
      if (struct.productId != null) {
        oprot.writeFieldBegin(PRODUCT_ID_FIELD_DESC);
        oprot.writeString(struct.productId);
        oprot.writeFieldEnd();
      }
      oprot.writeFieldBegin(UNIT_PRICE_FIELD_DESC);
      oprot.writeDouble(struct.unitPrice);
      oprot.writeFieldEnd();
      oprot.writeFieldBegin(QUANTITY_FIELD_DESC);
      oprot.writeI32(struct.quantity);
      oprot.writeFieldEnd();
      oprot.writeFieldBegin(TOTAL_PRICE_FIELD_DESC);
      oprot.writeDouble(struct.totalPrice);
      oprot.writeFieldEnd();
      oprot.writeFieldStop();
      oprot.writeStructEnd();
    }

  }

  private static class OrderResponseTupleSchemeFactory implements org.apache.thrift.scheme.SchemeFactory {
    @Override
    public OrderResponseTupleScheme getScheme() {
      return new OrderResponseTupleScheme();
    }
  }

  private static class OrderResponseTupleScheme extends org.apache.thrift.scheme.TupleScheme<OrderResponse> {

    @Override
    public void write(org.apache.thrift.protocol.TProtocol prot, OrderResponse struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TTupleProtocol oprot = (org.apache.thrift.protocol.TTupleProtocol) prot;
      java.util.BitSet optionals = new java.util.BitSet();
      if (struct.isSetProductId()) {
        optionals.set(0);
      }
      if (struct.isSetUnitPrice()) {
        optionals.set(1);
      }
      if (struct.isSetQuantity()) {
        optionals.set(2);
      }
      if (struct.isSetTotalPrice()) {
        optionals.set(3);
      }
      oprot.writeBitSet(optionals, 4);
      if (struct.isSetProductId()) {
        oprot.writeString(struct.productId);
      }
      if (struct.isSetUnitPrice()) {
        oprot.writeDouble(struct.unitPrice);
      }
      if (struct.isSetQuantity()) {
        oprot.writeI32(struct.quantity);
      }
      if (struct.isSetTotalPrice()) {
        oprot.writeDouble(struct.totalPrice);
      }
    }

    @Override
    public void read(org.apache.thrift.protocol.TProtocol prot, OrderResponse struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TTupleProtocol iprot = (org.apache.thrift.protocol.TTupleProtocol) prot;
      java.util.BitSet incoming = iprot.readBitSet(4);
      if (incoming.get(0)) {
        struct.productId = iprot.readString();
        struct.setProductIdIsSet(true);
      }
      if (incoming.get(1)) {
        struct.unitPrice = iprot.readDouble();
        struct.setUnitPriceIsSet(true);
      }
      if (incoming.get(2)) {
        struct.quantity = iprot.readI32();
        struct.setQuantityIsSet(true);
      }
      if (incoming.get(3)) {
        struct.totalPrice = iprot.readDouble();
        struct.setTotalPriceIsSet(true);
      }
    }
  }

  private static <S extends org.apache.thrift.scheme.IScheme> S scheme(org.apache.thrift.protocol.TProtocol proto) {
    return (org.apache.thrift.scheme.StandardScheme.class.equals(proto.getScheme()) ? STANDARD_SCHEME_FACTORY : TUPLE_SCHEME_FACTORY).getScheme();
  }
}

