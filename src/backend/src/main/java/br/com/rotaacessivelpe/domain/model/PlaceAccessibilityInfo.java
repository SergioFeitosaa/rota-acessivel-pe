package br.com.rotaacessivelpe.domain.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "place_accessibility_info")
public class PlaceAccessibilityInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "place_id", nullable = false)
    private Place place;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "feature_id", nullable = false)
    private AccessibilityFeature feature;

    private String status;
    private String source;
    
    @Column(name = "date_verified")
    private LocalDate dateVerified;
    
    private String comments;

    // Getters and Setters

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Place getPlace() { return place; }
    public void setPlace(Place place) { this.place = place; }

    public AccessibilityFeature getFeature() { return feature; }
    public void setFeature(AccessibilityFeature feature) { this.feature = feature; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getSource() { return source; }
    public void setSource(String source) { this.source = source; }

    public LocalDate getDateVerified() { return dateVerified; }
    public void setDateVerified(LocalDate dateVerified) { this.dateVerified = dateVerified; }

    public String getComments() { return comments; }
    public void setComments(String comments) { this.comments = comments; }
}
