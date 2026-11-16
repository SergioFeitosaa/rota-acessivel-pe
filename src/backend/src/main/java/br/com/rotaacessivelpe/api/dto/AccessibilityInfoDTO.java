package br.com.rotaacessivelpe.api.dto;

import java.time.LocalDate;

public class AccessibilityInfoDTO {
    private String featureName;
    private String featureIcon;
    private String status;
    private String source;
    private LocalDate dateVerified;
    private String comments;

    // Getters and Setters
    public String getFeatureName() { return featureName; }
    public void setFeatureName(String featureName) { this.featureName = featureName; }

    public String getFeatureIcon() { return featureIcon; }
    public void setFeatureIcon(String featureIcon) { this.featureIcon = featureIcon; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getSource() { return source; }
    public void setSource(String source) { this.source = source; }

    public LocalDate getDateVerified() { return dateVerified; }
    public void setDateVerified(LocalDate dateVerified) { this.dateVerified = dateVerified; }

    public String getComments() { return comments; }
    public void setComments(String comments) { this.comments = comments; }
}
