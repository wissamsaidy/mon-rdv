package sopra.monRdv.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import sopra.monRdv.model.Lieu;
import sopra.monRdv.repository.ILieuRepository;

@RestController
@RequestMapping("/lieu")
@CrossOrigin("*")
public class LieuRestController {

	@Autowired
	private ILieuRepository lieuRepo;

	@GetMapping("")
	public List<Lieu> findAll() {
		return lieuRepo.findAll();
	}

	@GetMapping("/{id}")
	public Lieu find(@PathVariable Long id) {

		Optional<Lieu> optLieu = lieuRepo.findById(id);

		if (optLieu.isPresent()) {
			return optLieu.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	public Lieu create(@RequestBody Lieu lieu) {
		lieu = lieuRepo.save(lieu);

		return lieu;
	}

	@PutMapping("/{id}")
	public Lieu update(@RequestBody Lieu lieu, @PathVariable Long id) {
		if (!lieuRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		lieu = lieuRepo.save(lieu);

		return lieu;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!lieuRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		lieuRepo.deleteById(id);
	}
}
