package br.com.rotaacessivelpe.domain.repository;

import br.com.rotaacessivelpe.domain.model.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaceRepository extends JpaRepository<Place, Long> {
}
