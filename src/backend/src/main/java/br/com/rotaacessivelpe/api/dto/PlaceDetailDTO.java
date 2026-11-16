package br.com.rotaacessivelpe.api.dto;

import java.util.List;

public class PlaceDetailDTO extends PlaceSummaryDTO {
    private String address;
    private Double latitude;
    private Double longitude;
    private List<AccessibilityInfoDTO> accessibilityInfos;

    // Getters and Setters
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    
    public Double getLatitude() { return latitude; }
    public void setLatitude(Double latitude) { this.latitude = latitude; }
    
    public Double getLongitude() { return longitude; }
    public void setLongitude(Double longitude) { this.longitude = longitude; }

    public List<AccessibilityInfoDTO> getAccessibilityInfos() { return accessibilityInfos; }
    public void setAccessibilityInfos(List<AccessibilityInfoDTO> accessibilityInfos) { this.accessibilityInfos = accessibilityInfos; }
}
